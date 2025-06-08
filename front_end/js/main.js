document.addEventListener("DOMContentLoaded", function () {
  const csvUrl = "https://soccer-data-bucket-nav.s3.amazonaws.com/data/bundesliga_standings_2022.csv";

  Papa.parse(csvUrl, {
    download: true,
    header: true,
    complete: function (results) {
      const data = results.data;

      const columns = Object.keys(data[0]).map(key => ({
        title: key,
        data: key
      }));

      $('#standings').DataTable({
        data: data,
        columns: columns
      });
    }
  });
});
