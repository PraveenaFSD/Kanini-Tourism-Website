using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TourAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Destinations",
                columns: table => new
                {
                    DestinationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DestinationName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinations", x => x.DestinationId);
                });

            migrationBuilder.CreateTable(
                name: "Exclutions",
                columns: table => new
                {
                    ExclutionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exclutions", x => x.ExclutionId);
                });

            migrationBuilder.CreateTable(
                name: "Inclutions",
                columns: table => new
                {
                    InclutionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inclutions", x => x.InclutionId);
                });

            migrationBuilder.CreateTable(
                name: "Tour",
                columns: table => new
                {
                    TourId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourPrice = table.Column<float>(type: "real", nullable: false),
                    NoOfDays = table.Column<int>(type: "int", nullable: false),
                    NoOfNights = table.Column<int>(type: "int", nullable: false),
                    MaxCapacity = table.Column<int>(type: "int", nullable: false),
                    MinCapacity = table.Column<int>(type: "int", nullable: false),
                    TourImages = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tour", x => x.TourId);
                });

            migrationBuilder.CreateTable(
                name: "TourDates",
                columns: table => new
                {
                    TourDateId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourId = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TourDates", x => x.TourDateId);
                    table.ForeignKey(
                        name: "FK_TourDates_Tour_TourId",
                        column: x => x.TourId,
                        principalTable: "Tour",
                        principalColumn: "TourId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TourDestinations",
                columns: table => new
                {
                    TourDestinationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourId = table.Column<int>(type: "int", nullable: false),
                    DestinationId = table.Column<int>(type: "int", nullable: false),
                    DestinationImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DestinationActivity = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TourDestinations", x => x.TourDestinationId);
                    table.ForeignKey(
                        name: "FK_TourDestinations_Destinations_DestinationId",
                        column: x => x.DestinationId,
                        principalTable: "Destinations",
                        principalColumn: "DestinationId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TourDestinations_Tour_TourId",
                        column: x => x.TourId,
                        principalTable: "Tour",
                        principalColumn: "TourId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TourExclutions",
                columns: table => new
                {
                    TourExclutionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourId = table.Column<int>(type: "int", nullable: false),
                    ExclutionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TourExclutions", x => x.TourExclutionId);
                    table.ForeignKey(
                        name: "FK_TourExclutions_Exclutions_ExclutionId",
                        column: x => x.ExclutionId,
                        principalTable: "Exclutions",
                        principalColumn: "ExclutionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TourExclutions_Tour_TourId",
                        column: x => x.TourId,
                        principalTable: "Tour",
                        principalColumn: "TourId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TourInclutions",
                columns: table => new
                {
                    TourInclutionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourId = table.Column<int>(type: "int", nullable: false),
                    InclutionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TourInclutions", x => x.TourInclutionId);
                    table.ForeignKey(
                        name: "FK_TourInclutions_Inclutions_InclutionId",
                        column: x => x.InclutionId,
                        principalTable: "Inclutions",
                        principalColumn: "InclutionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TourInclutions_Tour_TourId",
                        column: x => x.TourId,
                        principalTable: "Tour",
                        principalColumn: "TourId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TourDates_TourId",
                table: "TourDates",
                column: "TourId");

            migrationBuilder.CreateIndex(
                name: "IX_TourDestinations_DestinationId",
                table: "TourDestinations",
                column: "DestinationId");

            migrationBuilder.CreateIndex(
                name: "IX_TourDestinations_TourId",
                table: "TourDestinations",
                column: "TourId");

            migrationBuilder.CreateIndex(
                name: "IX_TourExclutions_ExclutionId",
                table: "TourExclutions",
                column: "ExclutionId");

            migrationBuilder.CreateIndex(
                name: "IX_TourExclutions_TourId",
                table: "TourExclutions",
                column: "TourId");

            migrationBuilder.CreateIndex(
                name: "IX_TourInclutions_InclutionId",
                table: "TourInclutions",
                column: "InclutionId");

            migrationBuilder.CreateIndex(
                name: "IX_TourInclutions_TourId",
                table: "TourInclutions",
                column: "TourId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TourDates");

            migrationBuilder.DropTable(
                name: "TourDestinations");

            migrationBuilder.DropTable(
                name: "TourExclutions");

            migrationBuilder.DropTable(
                name: "TourInclutions");

            migrationBuilder.DropTable(
                name: "Destinations");

            migrationBuilder.DropTable(
                name: "Exclutions");

            migrationBuilder.DropTable(
                name: "Inclutions");

            migrationBuilder.DropTable(
                name: "Tour");
        }
    }
}
