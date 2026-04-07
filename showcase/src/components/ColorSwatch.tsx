interface ColorSwatchProps {
  name: string;
  value: string;
  token?: string;
  className?: string;
}

export function ColorSwatch({ name, value, token, className }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 w-full rounded-lg border border-border ${className ?? ""}`}
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="text-xs font-medium text-foreground">{name}</p>
        <p className="font-mono text-[11px] text-muted-foreground">{value}</p>
        {token && (
          <p className="font-mono text-[10px] text-ink-tertiary">{token}</p>
        )}
      </div>
    </div>
  );
}
