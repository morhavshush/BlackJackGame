import { useEffect } from "react";
import Button from "components/ui-elements/Button";

import { PlayAudio } from "utils/constans/PlayAudio";
import MessageAlert from "assets/audio-clips/message-alert.mp3";

interface IDialogMessageProps {
  openDialog: boolean;
  header: any;
  content?: string;
  onClick: (arg: string) => void;
}

export const DialogMessage: React.FC<IDialogMessageProps> = ({
  openDialog,
  header = "",
  content,
  onClick,
}) => {
  let audio = PlayAudio(MessageAlert);
  useEffect(() => {
    if (openDialog) audio.play();
  }, [openDialog,audio]);
  return (
    <>
      {openDialog && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 ">
                <div className="mt-2 text-center">
                  <h4 className="text-lg font-medium text-gray-800 f-bold">
                    {header}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    {content}
                  </p>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <Button
                      className="w-full mt-2 p-2.5 flex-1 text-black rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => {
                        onClick("continue");
                      }}
                      title="Start New Game"
                    />
                    <Button
                      className="w-full mt-2 p-2.5 flex-1 text-black rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => {
                        onClick("close");
                      }}
                      title="No Thanks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
