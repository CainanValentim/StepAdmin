import React from 'react';

function Home() {
    return (
        <div className='home'>
                    <div className="main-content" id="panel">
                        <div className="header bg-primary pb-6">
                            <div className="container-fluid">
                            <div className="header-body">
                                <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <h6 className="h2 text-white d-inline-block mb-0">Bem-vindo, admin!</h6>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0">Alunos</h5>
                                            <span className="h2 font-weight-bold mb-0">350,897</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                            <i class="bi bi-person"></i>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0">Novos alunos</h5>
                                            <span className="h2 font-weight-bold mb-0">2,356</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                            <i class="bi bi-people"></i>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0">Personais</h5>
                                            <span className="h2 font-weight-bold mb-0">924</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                            <i class="bi bi-person-badge"></i>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0">Caixa do mês</h5>
                                            <span className="h2 font-weight-bold mb-0">R$ 490,650</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                            <i class="bi bi-cash-stack"></i>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="container-fluid mt--6">
                            <div className="row">
                            <div className="col">
                                <div className="card bg-default shadow">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="text-white mb-0">Novos alunos</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-dark table-flush">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th scope="col" className="sort" data-sort="name">Nome</th>
                                        <th scope="col" className="sort" data-sort="cpf">CPF</th>
                                        <th scope="col" className="sort" data-sort="status">Status</th>
                                        <th scope="col" className="sort" data-sort="idade">Data de Nascimento</th>
                                        <th scope="col" className="sort" data-sort="telefone">Telefone</th>
                                        <th scope="col" className="sort" data-sort="email">E-mail</th>
                                        <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                        <tr>
                                        <th className="name">
                                            Joana Dark Pereira Fernandes
                                        </th>
                                        <td className="cpf">
                                            707.707.707-70
                                        </td>
                                        <td className="status">
                                            Cancelado
                                        </td>
                                        <td className="idade">
                                            21/08/2001
                                        </td>
                                        <td className="telefone">
                                            (84) 99899-5050
                                        </td>
                                        <td className="email">
                                            step@gmail.com
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown">
                                            <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a className="dropdown-item" href="#">Excluir</a>
                                                <a className="dropdown-item" href="#">Cancelar</a>
                                                <a className="dropdown-item" href="#">Modificar</a>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th className="name">
                                            Joana Dark Pereira Fernandes
                                        </th>
                                        <td className="cpf">
                                            707.707.707-70
                                        </td>
                                        <td className="status">
                                            Ativo
                                        </td>
                                        <td className="idade">
                                            21/08/2001
                                        </td>
                                        <td className="telefone">
                                            (84) 99899-4040
                                        </td>
                                        <td className="email">
                                            step@gmail.com
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown">
                                            <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a className="dropdown-item" href="#">Excluir</a>
                                                <a className="dropdown-item" href="#">Confirmar</a>
                                                <a className="dropdown-item" href="#">Modificar</a>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th className="name">
                                            Joana Dark Pereira Fernandes
                                        </th>
                                        <td className="cpf">
                                            707.707.707-70
                                        </td>
                                        <td className="status">
                                            Suspenso
                                        </td>
                                        <td className="idade">
                                            21/08/2001
                                        </td>
                                        <td className="telefone">
                                            (84) 99899-5555
                                        </td>
                                        <td className="email">
                                            step@gmail.com
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown">
                                            <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a className="dropdown-item" href="#">Ação 1</a>
                                                <a className="dropdown-item" href="#">Ação 2</a>
                                                <a className="dropdown-item" href="#">Ação 3</a>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th className="name">
                                            Joana Dark Pereira Fernandes
                                        </th>
                                        <td className="cpf">
                                            707.707.707-70
                                        </td>
                                        <td className="status">
                                            Cancelado
                                        </td>
                                        <td className="idade">
                                            21/08/2001
                                        </td>
                                        <td className="telefone">
                                            (84) 99899-4444
                                        </td>
                                        <td className="email">
                                            step@gmail.com
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown">
                                            <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a className="dropdown-item" href="#">Ação 1</a>
                                                <a className="dropdown-item" href="#">Ação 2</a>
                                                <a className="dropdown-item" href="#">Ação 3</a>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th className="name">
                                            Joana Dark Pereira Fernandes
                                        </th>
                                        <td className="cpf">
                                            707.707.707-70
                                        </td>
                                        <td className="status">
                                            Cancelado
                                        </td>
                                        <td className="idade">
                                            21/08/2001
                                        </td>
                                        <td className="telefone">
                                            (84) 99899-5050
                                        </td>
                                        <td className="email">
                                            step@gmail.com
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown">
                                            <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div className="card-footer py-4">
                                    <nav aria-label="...">
                                    <ul className="pagination justify-content-end mb-0">
                                        <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={-1}>
                                            <i class="bi bi-arrow-left-short"></i>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        </li>
                                        <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i class="bi bi-arrow-right-short"></i>
                                            <span className="sr-only">Next</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
    

        </div>
    )
}

export default Home;