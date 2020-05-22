
///Use the D3 library to read in samples.json.




function buildMetadata(samples) {

  // use d3 to get meta data sample 
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata);


    var dataArray = metadata.filter(Obj => Obj.metadata == samples);
    console.log(dataArray);


    var dataArray = dataArray[0];
    console.log(dataArray);


    var panel = d3.select("#sample-metadata");

    /// use entries to add each key and value to the panel 
    Object.entries(dataArray).forEach(([key, value]) => {
      panel.append("div")
        .text(`${key}: ${value}`);
    })
  });
}




buildMetadata()


function buildCharts(sample) {

  // use d3 to get sample data 
  d3.json("samples.json").then((data) => {
    console.log(data);


    var samples = data.samples;
    console.log(samples);


    var dataArray = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(dataArray);


    var solv = dataArray[0];
    console.log(solv);


    // build using sample data 
    var otu_ids = solv.otu_ids;
    var otu_labels = solv.otu_labels;
    var sample_values = solv.sample_values;

    var barData = [
      {
        x: sample_values,
        y: otu_labels,
        text: otu_ids,
        type: "bar",
        orientation: "h"
      }
    ]
  })
};

init();

