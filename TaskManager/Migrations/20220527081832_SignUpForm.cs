using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManager.Migrations
{
    public partial class SignUpForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CountryID",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "ReceiveNewsLetters",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    CountryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.CountryID);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    SkillID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SkillName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.SkillID);
                    table.ForeignKey(
                        name: "FK_Skills_AspNetUsers_Id",
                        column: x => x.Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 1, "China" },
                    { 2, "United States" },
                    { 3, "Indonesia" },
                    { 4, "Brazil" },
                    { 5, "Pakistan" },
                    { 6, "Nigeria" },
                    { 7, "Bangladesh" },
                    { 8, "Russia" },
                    { 9, "Japan" },
                    { 10, "Mexico" },
                    { 11, "Philippines" },
                    { 12, "Vietnam" },
                    { 13, "Ethiopia" },
                    { 14, "Egypt" },
                    { 15, "Germany" },
                    { 16, "Iran" },
                    { 17, "Turkey" },
                    { 18, "Democratic Republic of the Congo" },
                    { 19, "Thailand" },
                    { 20, "France" },
                    { 21, "United Kingdom" },
                    { 22, "Italy" },
                    { 23, "South Africa" },
                    { 24, "South Korea" },
                    { 25, "Myanmar" },
                    { 26, "Spain" },
                    { 27, "Colombia" },
                    { 28, "Ukraine" },
                    { 29, "Tanzania" },
                    { 30, "Argentina" },
                    { 31, "Kenya" },
                    { 32, "Poland" },
                    { 33, "Algeria" },
                    { 34, "Canada" },
                    { 35, "Uganda" },
                    { 36, "Iraq" },
                    { 37, "Morocco" },
                    { 38, "Sudan" },
                    { 39, "Peru" },
                    { 40, "Malaysia" },
                    { 41, "Uzbekistan" },
                    { 42, "Saudi Arabia" }
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 43, "Venezuela" },
                    { 44, "Nepal" },
                    { 45, "Afghanistan" },
                    { 46, "Ghana" },
                    { 47, "Yemen" },
                    { 48, "North Korea" },
                    { 49, "Mozambique" },
                    { 50, "Taiwan" },
                    { 51, "Australia" },
                    { 52, "Syria" },
                    { 53, "Ivory Coast" },
                    { 54, "Madagascar" },
                    { 55, "Angola" },
                    { 56, "Sri Lanka" },
                    { 57, "Cameroon" },
                    { 58, "Romania" },
                    { 59, "Kazakhstan" },
                    { 60, "Netherlands" },
                    { 61, "Chile" },
                    { 62, "Niger" },
                    { 63, "Burkina Faso" },
                    { 64, "Ecuador" },
                    { 65, "Guatemala" },
                    { 66, "Mali" },
                    { 67, "Malawi" },
                    { 68, "Senegal" },
                    { 69, "Cambodia" },
                    { 70, "Zambia" },
                    { 71, "Zimbabwe" },
                    { 72, "Chad" },
                    { 73, "Cuba" },
                    { 74, "Belgium" },
                    { 75, "Guinea" },
                    { 76, "Greece" },
                    { 77, "Tunisia" },
                    { 78, "Portugal" },
                    { 79, "Rwanda" },
                    { 80, "Czech Republic" },
                    { 81, "Haiti" },
                    { 82, "Bolivia" },
                    { 83, "Somalia" },
                    { 84, "Hungary" }
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 85, "Benin" },
                    { 86, "Sweden" },
                    { 87, "Belarus" },
                    { 88, "Dominican Republic" },
                    { 89, "Azerbaijan" },
                    { 90, "Austria" },
                    { 91, "Honduras" },
                    { 92, "United Arab Emirates" },
                    { 93, "South Sudan" },
                    { 94, "Burundi" },
                    { 95, "Switzerland" },
                    { 96, "Israel" },
                    { 97, "Tajikistan" },
                    { 98, "Bulgaria" },
                    { 99, "Serbia" },
                    { 100, "Papua New Guinea" },
                    { 101, "Paraguay" },
                    { 102, "Laos" },
                    { 103, "Libya" },
                    { 104, "Jordan" },
                    { 105, "Sierra Leone" },
                    { 106, "Togo" },
                    { 107, "El Salvador" },
                    { 108, "Nicaragua" },
                    { 109, "Eritrea" },
                    { 110, "Denmark" },
                    { 111, "Kyrgyzstan" },
                    { 112, "Slovakia" },
                    { 113, "Finland" },
                    { 114, "Singapore" },
                    { 115, "Turkmenistan" },
                    { 116, "Norway" },
                    { 117, "Costa Rica" },
                    { 118, "Central African Republic" },
                    { 119, "Ireland" },
                    { 120, "Georgia" },
                    { 121, "New Zealand" },
                    { 122, "Republic of the Congo" },
                    { 123, "Lebanon" },
                    { 124, "Palestine" },
                    { 125, "Croatia" },
                    { 126, "Bosnia and Herzegovina" }
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 127, "Kuwait" },
                    { 128, "Moldova" },
                    { 129, "Liberia" },
                    { 130, "Mauritania" },
                    { 131, "Panama" },
                    { 132, "Uruguay" },
                    { 133, "Armenia" },
                    { 134, "Lithuania" },
                    { 135, "Albania" },
                    { 136, "Oman" },
                    { 137, "Mongolia" },
                    { 138, "Jamaica" },
                    { 139, "Lesotho" },
                    { 140, "Namibia" },
                    { 141, "Macedonia" },
                    { 142, "Slovenia" },
                    { 143, "Latvia" },
                    { 144, "Botswana" },
                    { 145, "Qatar" },
                    { 146, "Gambia" },
                    { 147, "Gabon" },
                    { 148, "Guinea-Bissau" },
                    { 149, "Trinidad and Tobago" },
                    { 150, "Estonia" },
                    { 151, "Mauritius" },
                    { 152, "Swaziland" },
                    { 153, "Bahrain" },
                    { 154, "Timor-Leste" },
                    { 155, "Cyprus" },
                    { 156, "Fiji" },
                    { 157, "Djibouti" },
                    { 158, "Guyana" },
                    { 159, "Equatorial Guinea" },
                    { 160, "Bhutan" },
                    { 161, "Comoros" },
                    { 162, "Montenegro" },
                    { 163, "Western Sahara" },
                    { 164, "Suriname" },
                    { 165, "Luxembourg" },
                    { 166, "Solomon Islands" },
                    { 167, "Cape Verde" },
                    { 168, "Malta" }
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryID", "CountryName" },
                values: new object[,]
                {
                    { 169, "Brunei" },
                    { 170, "Bahamas" },
                    { 171, "Maldives" },
                    { 172, "Iceland" },
                    { 173, "Belize" },
                    { 174, "Barbados" },
                    { 175, "Vanuatu" },
                    { 176, "Samoa" },
                    { 177, "Saint Lucia" },
                    { 178, "Kiribati" },
                    { 179, "Grenada" },
                    { 180, "Tonga" },
                    { 181, "Federated States of Micronesia" },
                    { 182, "Saint Vincent and the Grenadines" },
                    { 183, "Seychelles" },
                    { 184, "Antigua and Barbuda" },
                    { 185, "Andorra" },
                    { 186, "Dominica" },
                    { 187, "Liechtenstein" },
                    { 188, "Monaco" },
                    { 189, "San Marino" },
                    { 190, "Palau" },
                    { 191, "Tuvalu" },
                    { 192, "Nauru" },
                    { 193, "Vatican City" },
                    { 194, "India" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Skills_Id",
                table: "Skills",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropColumn(
                name: "CountryID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ReceiveNewsLetters",
                table: "AspNetUsers");
        }
    }
}
