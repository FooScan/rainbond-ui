// 应用下的信息

//应用总览
const appOverview = {
  'appOverview.memory': 'Use memory',
  'appOverview.cpu': 'Use CPU',
  'appOverview.disk': 'Use disk',
  'appOverview.componentNum': 'Number components',
  'appOverview.createTime': 'Creation time',
  'appOverview.updateTime': 'Update time',
  'appOverview.govern': 'Governance mode',
  'appOverview.principal': 'Head',
  'appOverview.backups': 'Backup',
  'appOverview.modelRelease': 'Model publishing',
  'appOverview.gateway': 'Gateway strategies',
  'appOverview.upgrade': 'To upgrade',
  'appOverview.config': 'Configuration set',
  'appOverview.btn.update':'Update',
  'appOverview.btn.build':'Build',
  'appOverview.btn.copy':'Rapid replication',
  'appOverview.btn.visit':'Access',
  'appOverview.btn.start':'Start',
  'appOverview.btn.stop':'Stop',
  'appOverview.btn.change':'Switch',
  'appOverview.btn.ordinary':'Normal mode',
  'appOverview.btn.aggregation':'Aggregation patterns',
  'appOverview.btn.arrange':'Compiling pattern',
  'appOverview.btn.addComponent':'Add component',
  'appOverview.topology': 'Topology',
  'appOverview.list': 'List',
  'appOverview.list.table.btn.name': 'Component name',
  'appOverview.list.table.memory': 'Memory',
  'appOverview.list.table.status': 'Status',
  'appOverview.list.table.updateTime': 'Update time',
  'appOverview.list.table.operate': 'Operation',
  'appOverview.list.table.restart': 'Restart',
  'appOverview.list.table.delete': 'Delete',
  'appOverview.list.table.start': 'Start',
  'appOverview.list.table.stop': 'Shut down',
  'appOverview.list.table.batchOperate': 'Batch operation',
  'appOverview.list.input.seach.hint': 'Please search for components',
  'appOverview.list.btn.seach': 'Search',
};

//应用发布
const appPublish = {
  'appPublish.title': 'Release record management',
  'appPublish.desc': 'Application publishing means to model the currently running applications, form application templates and release them to the enterprise application market or cloud application store, so as to support standardized application delivery or sharing',
  'appPublish.btn.local':'Publish to a component library',
  'appPublish.btn.market':'Publish to the cloud app store',
  'appPublish.table.publishName':'Publish template name',
  'appPublish.table.versions':'Version number (alias)',
  'appPublish.table.versions.null':'No version description is available',
  'appPublish.table.versions.notSpecified':'Is not specified',
  'appPublish.table.scope':'Release range',
  'appPublish.table.scope.market':'App market',
  'appPublish.table.scope.team_market':'App market(Team)',
  'appPublish.table.scope.enterprise_market':'App market(Enterprise)',
  'appPublish.table.scope.app_shop':'App store',
  'appPublish.table.publishTime':'Release time',
  'appPublish.table.status':'Status',
  'appPublish.table.status.release':'Release',
  'appPublish.table.status.release_finish':'Release complete',
  'appPublish.table.status.canceled':'Has been cancelled',
  'appPublish.table.operate':'Operation',
  'appPublish.table.btn.delete':'Delete',
  'appPublish.table.btn.confirm_delete':'Do you want to delete the current record',
  'appPublish.table.btn.confirm':'Confirm',
  'appPublish.table.btn.cancel':'Cancel',
  'appPublish.table.btn.continue':'Continue release',
  'appPublish.table.btn.release_cancel':'Cancel release',
}

//备份
const appBackups = {
  'appBackups.title':'Backup management',
  'appBackups.desc':'Application backup is a complete backup of the metadata, persistent data, and version data of the current application. Backup records can be used for application migration and rollback, and cloud backup records can be used for cross-cluster application migration',
  'appBackups.btn.addBackups':'New backup',
  'appBackups.btn.importBackups':'Import backup',
  'appBackups.btn.allBackups':'Full team backup',
  'appBackups.table.backupsTime':'Backup time',
  'appBackups.table.backupsPerson':'Backup person',
  'appBackups.table.backupsPattern':'Backup mode',
  'appBackups.table.backupsPattern.cloud':'Cloud backup',
  'appBackups.table.backupsPattern.local':'Local backup',
  'appBackups.table.packetSize':'Packet size',
  'appBackups.table.status':'Status',
  'appBackups.table.comment':'Note',
  'appBackups.table.operate':'Operation',
  'appBackups.table.btn.recover':'Restore',
  'appBackups.table.btn.removal':'Migration',
  'appBackups.table.btn.export':'Export',
  'appBackups.table.btn.delete':'Delete',

}

//网关
const appGateway = {
  'appGateway.title':'Gateway access policy management',
  'appGateway.desc':'Access policies are used to access components from outside the cluster, including HTTP domain name access or IP+Port(TCP/UDP) access. Only the access policies of all components in the current application are managed',
  'appGateway.placeholder.domain':'Search for domain name/component',
  'appGateway.placeholder.port':'Search for ports/components',
  'appGateway.btn.search':'Search',
  'appGateway.btn.add':'Add policy',
  'appGateway.table.domain':'Domain',
  'appGateway.table.type':'Type',
  'appGateway.table.route':'Advanced routing',
  'appGateway.table.certificate':'Certificate',
  'appGateway.table.app':'App',
  'appGateway.table.port':'Component ports',
  'appGateway.table.operate':'Operation',
  'appGateway.table.config':'Parameter configuration',
  'appGateway.table.edit':'Edit',
  'appGateway.table.delete':'Delete',
}

//升级
const appUpgrade = {
  'appUpgrade.title':'Upgrade management',
  'appUpgrade.desc':'Upgrade management is available when the current application has components installed from the app Marketplace or app store. If the application version of the installation source is changed, you can upgrade it',
  'appUpgrade.tabs.list':'List app models',
  'appUpgrade.current_version':'Current version',
  'appUpgrade.Upgradable_version':'Upgradable version',
  'appUpgrade.current_version.tooltip':'The current version refers to the largest version number of the installed components. Therefore, if you upgrade one component, the version number increases.',
  'appUpgrade.Upgradable_version.tooltip':'An upgradeable version refers to a version that is older than the current version',
  'appUpgrade.btn.upgrade':'Upgrade',
  'appUpgrade.btn.addon':'Check component',
  'appUpgrade.tabs.record':'Update record',
  'appUpgrade.table.createTime':'Creation time',
  'appUpgrade.table.chart':'Name',
  'appUpgrade.table.app':'Name app template',
  'appUpgrade.table.versions':'Version',
  'appUpgrade.table.status':'Status',
  'appUpgrade.table.operate':'Operation',
  'appUpgrade.table.operate.roll_back':'Rollback',
  'appUpgrade.table.operate.roll_back_record':'Roll back record',
}

//配置
const appConfiguration = {
  'appConfiguration.title':'Application configuration group management',
  'appConfiguration.desc':'Configuration groups are injected into the running environment of the component specified by the current application through environment variables',
  'appConfiguration.placeholder':'Search for the configuration group name',
  'appConfiguration.btn.search':'Search',
  'appConfiguration.btn.add':'Add Configuration Group',
  'appConfiguration.table.name':'Configuration Group Name',
  'appConfiguration.table.createTime':'Creation time',
  'appConfiguration.table.componentNum':'Number valid components',
  'appConfiguration.table.take_effect_component':'Effective component',
  'appConfiguration.table.take_effect':'Effect',
  'appConfiguration.table.not_take_effect':'Do not take effect',
  'appConfiguration.table.status':'Effective state',
  'appConfiguration.table.operate':'Operation',
  'appConfiguration.table.btn.edit':'Edit',
  'appConfiguration.table.btn.delete':'Delete',
}

//k8s资源
const addKubenetesResource = {
  'addKubenetesResource.title': 'K8s Resource management',
  'addKubenetesResource.desc': 'Resources deployed directly to the Kubernetes cluster via Yaml files are managed here.',
  'addKubenetesResource.btn.add':'Add',
  'addKubenetesResource.table.name': 'Name resource',
  'addKubenetesResource.table.type': 'Resource type',
  'addKubenetesResource.table.status': 'Status',
  'addKubenetesResource.table.operate': 'Operation',
  'addKubenetesResource.table.btn.check': 'View',
  'addKubenetesResource.table.btn.edit': 'Edit',
  'addKubenetesResource.table.btn.delete': 'Delete',
  'addKubenetesResource.table.success': 'Creating successful',
  'addKubenetesResource.table.update_success': 'Update successful',
  'addKubenetesResource.table.update_error': 'Update failed',
  'addKubenetesResource.table.error': 'Create failure',
  'addKubenetesResource.table.checkDetail': 'Check details',
  'addKubenetesResource.table.errorDetail': 'Failure details',
}

//动态
const appDynamic = {
  'appDynamic.title':'Dynamic',
  'appDynamic.desc':'Tracing account operation records can be used in scenarios such as security analysis, resource change tracing, and compliance audit.',
  'appDynamic.table.user':'User',
  'appDynamic.table.componentName':'Component name',
  'appDynamic.table.operateTime':'Operating time',
  'appDynamic.table.operateContent':'Operating content',
  'appDynamic.table.operateDetail':'Operation details',
  'appDynamic.table.checkDetail':'Check details',
  'appDynamic.btn.inquire':'Query',
}
export default Object.assign({}, appOverview, appPublish, appBackups, appConfiguration, appUpgrade, appConfiguration, addKubenetesResource, appDynamic);
