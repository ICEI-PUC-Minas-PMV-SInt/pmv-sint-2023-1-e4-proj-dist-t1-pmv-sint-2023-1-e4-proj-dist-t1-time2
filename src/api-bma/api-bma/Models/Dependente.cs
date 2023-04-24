using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_bma.Models
{
    [Table("Dependentes")]
    public class Dependente : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório!")]        
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        [Display(Name = "Data de Nascimento")]
        public DateTime Data_Nascimento { get; set; }

        [Display(Name ="Beneficiário")]
        public int BeneficiarioId { get; set; }
        //[ForeignKey("BeneficiarioId")]
        public Beneficiario Beneficiario { get; set; }


    }
}
