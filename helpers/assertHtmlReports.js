var chai = require('chai');
var fs = require('fs-extra');
var path = require('path');
var should = chai.should();

module.exports = function assertHtmlReports(outputDirectory) {

  /**
   * check if report exists
   * @param report
   * @return
   */
  function isReportExists(report) {
    try {
      return fs.statSync(report).isFile();
    } catch (e) {
      return false;
    }
  }

  var hierarchyHtmlFile = path.join(outputDirectory, 'cucumber_report_hierarchy.html');
  var bootstrapHtmlFile = path.join(outputDirectory, 'cucumber_report_bootstrap.html');
  var foundationHtmlFile = path.join(outputDirectory, 'cucumber_report_foundation.html');
  var simpleHtmlFile = path.join(outputDirectory, 'cucumber_report_simple.html');

  isReportExists(hierarchyHtmlFile).should.be.equal(true, 'hierarchyHtmlFile file \'' + hierarchyHtmlFile + '\' does not exist');
  isReportExists(bootstrapHtmlFile).should.be.equal(true, 'bootstrapHtmlFile file \'' + bootstrapHtmlFile + '\' does not exist');
  isReportExists(foundationHtmlFile).should.be.equal(true, 'foundationHtmlFile file \'' + foundationHtmlFile + '\' does not exist');
  isReportExists(simpleHtmlFile).should.be.equal(true, 'simpleHtmlFile file \'' + simpleHtmlFile + '\' does not exist');
};
