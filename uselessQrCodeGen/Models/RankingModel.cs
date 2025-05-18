namespace uselessQrCodeGen.Models
{
    public class RankingModel
    {
        private static int _nextId = 0;
        public RankingModel(string name, int lostTime)
        {
            Id = _nextId++;
            Name = name;
            LostTime = lostTime;
            CreationDate = DateTime.Now;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int LostTime { get; set; }
        public DateTime CreationDate { get; set; }

    }
}
