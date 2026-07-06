interface TextTextureProps {
  className?: string;
}

export default function TextTexture({ className = "" }: TextTextureProps) {
  return (
    <img
      src='/textures/brush1.svg'
      alt=''
      aria-hidden
      className={`
        absolute
        inset-0
        w-full
        h-full
        object-contain
        pointer-events-none
        select-none
        opacity-5
        dark:opacity-10
        ${className}
      `}
    />
  );
}
