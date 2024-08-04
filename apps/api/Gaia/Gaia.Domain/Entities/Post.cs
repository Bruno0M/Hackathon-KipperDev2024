namespace Gaia.Domain.Entities
{
    public class Post
    {
        public Guid Id { get; set; }
        public string PostUrl { get; set; }
        public string Description { get; set; }
        public Guid UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}