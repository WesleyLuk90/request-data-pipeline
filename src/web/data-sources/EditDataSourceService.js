class EditDataSourceService {
    constructor(editDataSourceStore, dataSourceService, router) {
        this.editDataSourceStore = editDataSourceStore;
        this.dataSourceService = dataSourceService;
        this.router = router;
    }

    update() {
        return this.dataSourceService.update(this.editDataSourceStore.get())
            .then((dataSource) => {
                this.router.go('data-sources');
                return dataSource;
            });
    }

    load(id) {
        return this.dataSourceService.get(id)
            .then((dataSource) => {
                this.editDataSourceStore.update(dataSource);
                return dataSource;
            });
    }
}

EditDataSourceService.$name = 'editDataSourceService';
EditDataSourceService.$inject = ['editDataSourceStore', 'dataSourceService', 'router'];

module.exports = EditDataSourceService;
