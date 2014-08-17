using System.Linq;

namespace H724.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> Table();
        TEntity Find(int id);
        TEntity Add(TEntity entity);
        TEntity Remove(TEntity entity);
        TEntity Remove(int id);
        TEntity Update(TEntity entity);
    }
}