using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManager.Models
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ProjectID { get; set; }

        public string ProjectName { get; set; }

        [DisplayFormat(DataFormatString = "M/d/yyyy")]
        public DateTime DateOfStart { get; set; }

        public int? TeamSize { get; set; }

        public bool Active { get; set; }

        public string Status { get; set; }

        public int ClientLocationID { get; set; }

        [ForeignKey("ClientLocationID")]
        public virtual ClientLocation ClientLocation { get; set; }
    }
}


