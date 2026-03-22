import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-ice flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl text-navy mb-4">404</p>
        <h1 className="font-serif text-2xl text-navy mb-3">Página não encontrada</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi removida.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}
