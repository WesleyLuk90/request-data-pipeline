class CreateDataSourceService {
    constructor(router, createDataSourceStore, dataSourceService) {
        this.router = router;
        this.createDataSourceStore = createDataSourceStore;
        this.dataSourceService = dataSourceService;
    }

    create() {
        return this.dataSourceService.create(this.createDataSourceStore.get())
            .then((created) => {
                this.createDataSourceStore.reset();
                this.router.go('data-sources');
                return created;
            });
    }
}

CreateDataSourceService.$name = 'createDataSourceService';
CreateDataSourceService.$inject = ['router', 'createDataSourceStore', 'dataSourceService'];

module.exports = CreateDataSourceService;
