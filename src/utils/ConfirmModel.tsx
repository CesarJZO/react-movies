import Swal from "sweetalert2";

export default function confirm(
  onConfirm: () => void,
  title?: string,
  buttonText?: string
) {
  title = title || "Are you sure?";
  buttonText = buttonText || "Yes, delete it!";

  Swal.fire({
    title: title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: buttonText,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
}
