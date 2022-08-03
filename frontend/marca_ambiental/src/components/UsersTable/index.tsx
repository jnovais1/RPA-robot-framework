import {Container} from './styles';
import editing from "../../assets/editing.png";
import trash from "../../assets/trash.png";


export function UsersTable() {
  const users = [
    {
      name: "Teste",
      email: "teste@gmail.com",
      username: "teste123",
      created_at: "01/01/2022",
    },
    {
      name: "Teste2",
      email: "teste3@gmail.com",
      username: "teste1234",
      created_at: "01/01/2022",
    },
    {
      name: "Teste3",
      email: "teste2@gmail.com",
      username: "teste1235",
      created_at: "01/01/2022",
    },
  ]

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Nome de usuário</th>
            <th>Criado em</th>
            <th>Alterar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.created_at}</td>
              <td>
                <button>
                    <img src={editing} alt="editing" />
                </button>
              </td>
              <td>
                <button className="Delete">
                  <img src={trash} alt="trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}