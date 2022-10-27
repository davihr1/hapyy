import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Separator from '@radix-ui/react-separator';

const mockPromise = async () =>
  await new Promise((resolve) => setTimeout(resolve, 1000));

export default function Modal() {
  const [open, setOpen] = React.useState(true);

 function close() {
    setOpen(false);
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Overlay className="bg-black-100 inset-0 fixed" />

      <AlertDialog.Content
        className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] h-1/2"
      >
        <AlertDialog.Title className="text-primary-100 font-sans font-medium text-3xl">
          Escolha o estilo da pagina
        </AlertDialog.Title>

        <Separator.Root className="w-full bg-primary-100 h-[1px] mt-5" />

        <div className="flex flex-col w-full mt-7">
          <button className="text-primary-100 pb-4">Atual</button>
          <button className="text-primary-100 pb-6">Spotify Profile</button>
          <button className="text-primary-100 pb-6">Profissional</button>
        </div>

        <Separator.Root className="w-full bg-black-100 h-[1px] mt-5" />

        <button onClick={close}>Fechar</button>

      </AlertDialog.Content>

      <AlertDialog.Portal></AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
