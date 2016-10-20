var FileAdapter = require('parse-server-fs-adapter');
var S3Adapter = require('parse-server-s3-adapter');
var GCSAdapter = require('parse-server-gcs-adapter');

module.exports = {
  applicationId: "STUB",
  masterKey: "STUB",
  mongoURL: "STUB",
  serverURL: "https://api.parse.com/1",
  filesToTransfer: 'all',
  renameInDatabase: true,
  renameFiles: true,
  transferTo: 's3',

  // For filesystem configuration
  filesystemPath: './downloaded_files',

  // For S3 configuration
  aws_accessKeyId: "STUB",
  aws_secretAccessKey: "STUB",
  aws_bucket: "STUB",
};
