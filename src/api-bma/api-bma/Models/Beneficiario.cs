using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace api_bma.Models
{
    [Table("Beneficiarios")]
    
    public class Beneficiario: LinksHATEOS
    {
        [Key]
        public int BeneficiarioId { get; set; }     

        public Titularbolsafamilia titularBolsaFamilia { get; set; }
        public int quantidadeDependentes { get; set; }
        public ICollection<Dependente> dependentes { get; set; }
        public Endereco endereco { get; set; }




















        //[Required(ErrorMessage = "Campo Obrigatório")]

        //public string Nome { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]

        //public string CPF { get; set; }

        //[JsonPropertyName("nis")]
        //public string NIS { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        //[Display(Name = "Data de Nascimento")]
        //public DateTime Data_Nascimento { get; set; }


        //[Required(ErrorMessage = "Campo Obrigatório")]
        //public string Logradouro { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //[Display(Name = "Número")]
        //public string Numero { get; set; }
        //public string Complemento { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //public string Bairro { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //public string Cidade { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //public string UF { get; set; }

        //[Required(ErrorMessage = "Campo Obrigatório")]
        //public string CEP { get; set; }

        //[Display(Name = "Cesta Básica")]
        //public bool Cesta_basica { get; set; }

        //[Display(Name = "Cesta Verde")]
        //public bool Cesta_Verde { get; set; }

        //public ICollection<Dependente> Dependentes { get; set; }
        ////public ICollection<Doacao> Doacoes { get; set; }


    }
}
