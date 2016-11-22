class DataSourceListLoader {
    constructor(dataSourceService, dataSourceListStore) {
        this.dataSourceService = dataSourceService;
        this.dataSourceListStore = dataSourceListStore;
    }

    load() {
        return this.dataSourceService.list()
            .then((dataSources) => {
                this.dataSourceListStore.update(dataSources);
                return dataSources;
            });
    }
}

DataSourceListLoader.$name = 'dataSourceListLoader';
DataSourceListLoader.$inject = ['dataSourceService', 'dataSourceListStore'];

module.exports = DataSourceListLoader;
