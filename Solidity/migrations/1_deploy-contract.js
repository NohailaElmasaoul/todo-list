var taskContact=artifacts.require("TaskContract");

module.exports = function(deployer) {
      deployer.deploy(taskContact);
}