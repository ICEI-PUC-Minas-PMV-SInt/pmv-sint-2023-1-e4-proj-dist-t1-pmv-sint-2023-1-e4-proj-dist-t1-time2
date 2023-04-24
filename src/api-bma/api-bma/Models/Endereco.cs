using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_bma.Models
{
    [Table("Endereço")]
    public class Endereco: LinksHATEOS
    {
        [Key]
        public int EnderecoId { get; set; }
        public string cep { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string neighborhood { get; set; }
        public string street { get; set; }

        public int BeneficiarioId { get; set; }
        public Beneficiario Beneficiario { get; set; }

    }    
      




    
}
