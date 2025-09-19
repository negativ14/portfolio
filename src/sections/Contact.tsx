import MailIcon from "@/assets/icons/MailIcon";
import XIcon from "@/assets/icons/XIcon";

export default function Contact() {
  return (
    <section className="w-full bg-background border-y shadow-md">
      <h2 className="font-semibold text-2xl text-foreground/80 border-b px-4 py-2 tracking-tight">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 divide-y md:divide-x border-t mt-4">
        {/* mail */}
        <div className="flex items-center px-6 py-4 gap-4">
          <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border p-2 size-10 rounded-lg flex justify-center items-center relative cursor-pointer">
            <MailIcon className="h-4.5" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">Mail</h4>
            <p className="text-xs text-muted-foreground font-mono">
              email.rohitmehta@gmail.com
            </p>
          </div>
        </div>

        {/* Twetter */}
        <div className="flex items-center px-6 py-4 gap-4">
          <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border p-2 size-10 rounded-lg cursor-pointer">
            <XIcon />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">X</h4>
            <p className="text-xs text-muted-foreground font-mono">
              RohitMehta1409
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
