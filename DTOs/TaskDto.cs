namespace ToDoList.DTOs
{
    public class TaskDto
    {
        public int TaskID { get; set; }

        public string TaskName { get; set; } = string.Empty;

        public string TaskContent { get; set; } = string.Empty;
        public int UserID { get; set; }
    }
}
