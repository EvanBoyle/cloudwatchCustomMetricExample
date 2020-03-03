var AWS = require('aws-sdk');


var cloudwatch = new AWS.CloudWatch()

var params = {
    MetricData: [ /* required */
      {
        MetricName: 'test_metric', /* required */
        Dimensions: [
          {
            Name: 'task_id', /* required */
            Value: '111' /* required */
          },
          /* more items */
        ],

        StorageResolution: '60',
        Timestamp: new Date(),
        Unit: "Count",
        Values: [
          1,
          2,
          3
          /* more items */
        ]
      },
      /* more items */
    ],
    Namespace: 'task_restart' /* required */
  };

cloudwatch.putMetricData(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });