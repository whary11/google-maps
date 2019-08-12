<template>
    <div>
        <div class="col-sm-12">
                <data-table clases="table table-bordered table-sm table-hover table-centered">
                    <template #th>
                        <td>
                            Progreso
                        </td>
                    </template>
                    <template slot="td" scope="row">
                        <td>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 45%;" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">45% {{row.nombre}} </div>
                            </div>
                        </td>
                    </template>
                </data-table>
            </div>
    </div>
</template>