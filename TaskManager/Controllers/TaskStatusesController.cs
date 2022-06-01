using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Identity;

namespace TaskManager.Controllers
{
    [Authorize]
    public class TaskStatusesController : Controller
    {
        private ApplicationDbContext db;

        public TaskStatusesController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("api/taskstatuses")]
        public List<Models.TaskStatus> Get()
        {
            List<Models.TaskStatus> taskStatuses = db.TaskStatuses.ToList();
            return taskStatuses;
        }

        [HttpGet]
        [Route("api/taskstatuses/searchbytaskstatusid/{TaskStatusID}")]
        public IActionResult GetByTaskStatusID(int TaskStatusID)
        {
            Models.TaskStatus taskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == TaskStatusID).FirstOrDefault();
            if (taskStatus != null)
            {
                return Ok(taskStatus);
            }
            else
                return NoContent();
        }

        [HttpPost]
        [Route("api/taskstatuses")]
        public Models.TaskStatus Post([FromBody] Models.TaskStatus taskStatus)
        {
            db.TaskStatuses.Add(taskStatus);
            db.SaveChanges();

            Models.TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatus.TaskStatusID).FirstOrDefault();
            return taskStatus;
        }

        [HttpPut]
        [Route("api/taskstatuses")]
        public Models.TaskStatus Put([FromBody] Models.TaskStatus project)
        {
            Models.TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == project.TaskStatusID).FirstOrDefault();
            if (existingTaskStatus != null)
            {
                existingTaskStatus.TaskStatusName = project.TaskStatusName;
                db.SaveChanges();
                return existingTaskStatus;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/taskstatuses")]
        public int Delete(int TaskStatusID)
        {
            Models.TaskStatus existingTaskStatus = db.TaskStatuses.Where(temp => temp.TaskStatusID == TaskStatusID).FirstOrDefault();
            if (existingTaskStatus != null)
            {
                db.TaskStatuses.Remove(existingTaskStatus);
                db.SaveChanges();
                return TaskStatusID;
            }
            else
            {
                return -1;
            }
        }
    }
}
