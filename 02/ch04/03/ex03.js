//
// EC2 인스턴스를 중지
//
const AWS = require('aws-sdk');

ec2 = new AWS.EC2({
  region: 'ap-northeast-2',
  apiVersion: '2016-11-15'
});

ec2.stopInstances({
  InstanceIds: ['i-008d6ab51c9fb0266'],
  DryRun: false,
  Force: false
}, function (error, data) {
  if(error){
    console.log(error, error.stack);
    return;
  }
  
  console.log(data);
});