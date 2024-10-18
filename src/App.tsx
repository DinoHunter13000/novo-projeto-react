import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function App() {
  const listaDeAlunos = [
    {nome: "João", dataDeNascimento: "08/08/2007", sexo: "masculino"},
    {nome: "Bruno", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Christian", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Bruno", dataDeNascimento: "08/08/1", sexo: "masculino"},
    {nome: "Isaac", dataDeNascimento: "08/07/2008", sexo: "masculino"},
    {nome: "Felipe", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Anderson", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Anadir", dataDeNascimento: "08/08/2000", sexo: "feminino"},
    {nome: "Gabriel", dataDeNascimento: "08/08/2000", sexo: "masculino"}, 
    {nome: "Lorenza", dataDeNascimento: "08/08/2000", sexo: "feminino"},
    {nome: "Pedro Longo", dataDeNascimento: "30/02/2008", sexo: "masculino"},
    {nome: "João Vitor", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Rafael", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Kaio", dataDeNascimento: "08/08/2004", sexo: "masculino"},
    {nome: "Douglas", dataDeNascimento: "08/08/2008", sexo: "masculino"},
    {nome: "Fábio Negrão", dataDeNascimento: "08/08/2000", sexo: "masculino"},
    {nome: "Larissa", dataDeNascimento: "21/03/2006", sexo: "feminino"},
  ]

  return (
    <>
      <ul>
        {listaDeAlunos.map((item) => {return (<li>{item.nome} {item.dataDeNascimento} {item.sexo}</li>)})}
      </ul>
      <Button variant="outlined">Exemplo de botão</Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Aluno</TableCell>
            <TableCell align="right">Data de nascimento</TableCell>
            <TableCell align="right">Sexo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaDeAlunos.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell align="right">{item.dataDeNascimento}</TableCell>
              <TableCell align="right">{item.sexo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
 
}
export default App;