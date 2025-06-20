using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoList.Models
{
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskID { get; set; }

        public string TaskName { get; set; }

        public string  TaskContent{ get; set; }

        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; }

      

    }
}
