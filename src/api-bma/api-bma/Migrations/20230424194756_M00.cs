using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_bma.Migrations
{
    /// <inheritdoc />
    public partial class M00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Beneficiarios",
                columns: table => new
                {
                    BeneficiarioId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titularBolsaFamilia_nis = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    titularBolsaFamilia_nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    quantidadeDependentes = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beneficiarios", x => x.BeneficiarioId);
                });

            migrationBuilder.CreateTable(
                name: "Dependentes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data_Nascimento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BeneficiarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dependentes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dependentes_Beneficiarios_BeneficiarioId",
                        column: x => x.BeneficiarioId,
                        principalTable: "Beneficiarios",
                        principalColumn: "BeneficiarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Endereço",
                columns: table => new
                {
                    EnderecoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cep = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighborhood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BeneficiarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endereço", x => x.EnderecoId);
                    table.ForeignKey(
                        name: "FK_Endereço_Beneficiarios_BeneficiarioId",
                        column: x => x.BeneficiarioId,
                        principalTable: "Beneficiarios",
                        principalColumn: "BeneficiarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LinkDto",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Href = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Metodo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BeneficiarioId = table.Column<int>(type: "int", nullable: true),
                    DependenteId = table.Column<int>(type: "int", nullable: true),
                    EnderecoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LinkDto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LinkDto_Beneficiarios_BeneficiarioId",
                        column: x => x.BeneficiarioId,
                        principalTable: "Beneficiarios",
                        principalColumn: "BeneficiarioId");
                    table.ForeignKey(
                        name: "FK_LinkDto_Dependentes_DependenteId",
                        column: x => x.DependenteId,
                        principalTable: "Dependentes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LinkDto_Endereço_EnderecoId",
                        column: x => x.EnderecoId,
                        principalTable: "Endereço",
                        principalColumn: "EnderecoId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Dependentes_BeneficiarioId",
                table: "Dependentes",
                column: "BeneficiarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Endereço_BeneficiarioId",
                table: "Endereço",
                column: "BeneficiarioId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_BeneficiarioId",
                table: "LinkDto",
                column: "BeneficiarioId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_DependenteId",
                table: "LinkDto",
                column: "DependenteId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_EnderecoId",
                table: "LinkDto",
                column: "EnderecoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LinkDto");

            migrationBuilder.DropTable(
                name: "Dependentes");

            migrationBuilder.DropTable(
                name: "Endereço");

            migrationBuilder.DropTable(
                name: "Beneficiarios");
        }
    }
}
