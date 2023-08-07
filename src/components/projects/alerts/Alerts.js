import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const saved = () => {
  return MySwal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Guardado exitosamente',
    showConfirmButton: false,
    timer: 1500
  })
}

export const carError = () => {
  return MySwal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Hubo un error. Es posible que el servidor no este conectado a internet',
    showConfirmButton: false,
    timer: 2000
  })
}


export const noData = () => {
  return MySwal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'No se encontraron datos',
    showConfirmButton: false,
    timer: 2000
  })
}
export const createError = () => {
  return MySwal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Error. No se pudo crear',
    showConfirmButton: false,
    timer: 2000
  })
}

export const confirmDeletionAlert = () => {
  return MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}