using System;
using System.ComponentModel.DataAnnotations;

namespace Mission3Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int GroupProject { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
        
    }
}
