import { ToastController } from "@ionic/angular";

export const AlertToast = async (message:string) => {
    const toastController = new ToastController();
  const toast = await toastController.create({
    message,
    duration: 1500,
    position: 'middle',
  });
  await toast.present();
};