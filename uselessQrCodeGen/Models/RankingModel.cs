using System.ComponentModel.DataAnnotations;
namespace uselessQrCodeGen.Models
{
    public class RankingModel
    {
        [Key] 
        public int Id { get; set; }
        public string Name { get; set; }
        public int LostTime { get; set; }
        public DateTime DataCreation { get; set; }
    }
}
