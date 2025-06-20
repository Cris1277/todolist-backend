using Microsoft.EntityFrameworkCore;
using System;

namespace ToDoList.Models
{
    public class ToDoListContext:DbContext
    {
        public ToDoListContext(DbContextOptions<ToDoListContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } = null!;

        public DbSet<Task> Tasks { get; set; } = null!;

    }
}
