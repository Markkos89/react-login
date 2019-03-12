import React from 'react';

const CrudUser = props => {
  const { onAddUserClick, onEditUserClick, onDeleteUserClick } = props;

  return  <div>
            <ul>
              <li><button onClick={onAddUserClick}>Agregar usuario</button></li>
              <li><button onClick={onEditUserClick}>Modificar usuario</button></li>
              <li><button onClick={onDeleteUserClick}>Eliminar usuario</button></li>
            </ul>
          </div>
};

export default CrudUser;