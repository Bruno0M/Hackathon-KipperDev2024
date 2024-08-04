namespace Gaia.Domain.Entities
{
    public class UpVote
    {
        public Guid Id { get; set; }
        public Guid PostId { get; set; }
        public Post Post { get; set; }
        public Guid UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
