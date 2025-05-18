using uselessQrCodeGen.Models;

namespace uselessQrCodeGen.Services
{
    public sealed class RankingList
    {
        private static RankingList _instance = null;

        private static readonly object _lock = new object();

        private List<RankingModel> _rankingList;

        private RankingList()
        {
            _rankingList = new List<RankingModel>();
        }

        public static RankingList Instance
        {
            get
            {
                if (_instance == null)
                {
                    lock (_lock)
                    {
                        if (_instance == null)
                        {
                            _instance = new RankingList();
                        }
                    }
                }
                return _instance;
            }
        }

        public void AddRanking(RankingModel ranking)
        {
            if (ranking is not null)
                _rankingList.Add(ranking);
        }

        public List<RankViewModel> GetRankingList()
        {
            var results = new List<RankViewModel>();
            foreach (var item in _rankingList)
            {
                results.Add(new RankViewModel
                {
                    Id = item.Id,
                    Name = item.Name,
                    LostTime = item.LostTime
                });

            }
            return results;
        }
    }
}
