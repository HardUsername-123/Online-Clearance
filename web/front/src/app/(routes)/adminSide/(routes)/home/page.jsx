'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, id_no: "12-0734", name: "Alice Reyes", phone_number: "0956445343", email: "alice@example.com", pass: "reyes123" },
    { id: 2, id_no: "21-0882", name: "Bob Manabat", phone_number: "0945343434", email: "bob@example.com", pass:"reyes123" },
  ]);
  const [newUser, setNewUser] = useState({  id_no:"", name: "", email: "", phone_number: "", pass: "" });
  const [editUser, setEditUser] = useState(null);
  const [open, setOpen] = useState(false);

  const addUser = () => {
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ id_no:"", name: "", email: "", phone_number: "", pass: ""});
    setOpen(false);
  };

  const updateUser = () => {
    setUsers(users.map(user => user.id === editUser.id ? editUser : user));
    setEditUser(null);
    setOpen(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 w-full bg-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Clearing Officer Management</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add User</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>{editUser ? "Edit User" : "Add User"}</DialogTitle>
            <Input placeholder="Id Number" value={editUser?.id_no || newUser.id_no} onChange={(e) => editUser ? setEditUser({...editUser, id_no: e.target.value}) : setNewUser({ ...newUser, id_no: e.target.value })} />
            <Input placeholder="Name" value={editUser?.name || newUser.name} onChange={(e) => editUser ? setEditUser({...editUser, name: e.target.value}) : setNewUser({ ...newUser, name: e.target.value })} />
            <Input placeholder="Email" value={editUser?.email || newUser.email} onChange={(e) => editUser ? setEditUser({...editUser, email: e.target.value}) : setNewUser({ ...newUser, email: e.target.value })} />
            <Input placeholder="Phone Number" value={editUser?.phone_number || newUser.phone_number} onChange={(e) => editUser ? setEditUser({...editUser, phone_number: e.target.value}) : setNewUser({ ...newUser, phone_number: e.target.value })} />
            <Input placeholder="Password" value={editUser?.pass || newUser.pass} onChange={(e) => editUser ? setEditUser({...editUser, pass: e.target.value}) : setNewUser({ ...newUser, pass: e.target.value })} />
            <Button onClick={editUser ? updateUser : addUser}>{editUser ? "Save Changes" : "Add"}</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id Number</TableHead>
            <TableHead>Full name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Passwprd</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id_no}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone_number}</TableCell>         
              <TableCell>{user.pass}</TableCell>  
              <TableCell>
                <Button onClick={() => { setEditUser(user); setOpen(true); }} className="mr-2">Edit</Button>
                <Button variant="destructive" onClick={() => deleteUser(user.id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
