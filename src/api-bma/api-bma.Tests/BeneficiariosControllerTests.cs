using FakeItEasy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api_bma.Tests
{
    public class BeneficiariosControllerTests
    {
       private List<Beneficiario> _beneficiarios;
       public BeneficiariosControllerTests() 
       {
            _beneficiarios = A.FakeList<Beneficiario>();
        }
      
    }
}
