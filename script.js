function calculate() {
  if (
    [
      $("#diam").val().length,
      $("#len").val().length,
      $("#num").val().length,
    ].includes(0)
  ) {
    $("#output").text("36");
    return;
  }

  const diam = $("#diam").val();
  const len = $("#len").val();
  const num = $("#num").val();

  const res = Math.round((diam * 3.1428 * len * num) / 1000000);

  $("#output").text(res);
  navigator.clipboard.writeText(res);
}

$(document).on("keypress", function (e) {
  if (e.key.toLowerCase() === "enter) {
    calculate();
  }
});
