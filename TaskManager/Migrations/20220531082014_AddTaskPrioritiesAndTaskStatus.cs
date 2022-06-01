using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManager.Migrations
{
    public partial class AddTaskPrioritiesAndTaskStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TaskPriorities",
                columns: table => new
                {
                    TaskPriorityID = table.Column<int>(type: "int", nullable: false),
                    TaskPriorityName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskPriorities", x => x.TaskPriorityID);
                });

            migrationBuilder.CreateTable(
                name: "TaskStatuses",
                columns: table => new
                {
                    TaskStatusID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TaskStatusName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskStatuses", x => x.TaskStatusID);
                });

            migrationBuilder.InsertData(
                table: "TaskPriorities",
                columns: new[] { "TaskPriorityID", "TaskPriorityName" },
                values: new object[,]
                {
                    { 1, "Urgent" },
                    { 2, "Normal" },
                    { 3, "Below Normal" },
                    { 4, "Low" }
                });

            migrationBuilder.InsertData(
                table: "TaskStatuses",
                columns: new[] { "TaskStatusID", "TaskStatusName" },
                values: new object[,]
                {
                    { 1, "Holding" },
                    { 2, "Prioritized" },
                    { 3, "Started" },
                    { 4, "Finished" },
                    { 5, "Reverted" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TaskPriorities");

            migrationBuilder.DropTable(
                name: "TaskStatuses");
        }
    }
}
