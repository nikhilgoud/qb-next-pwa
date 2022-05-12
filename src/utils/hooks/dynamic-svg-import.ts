import { useRef, useState, useEffect } from 'react';
interface UseDynamicSVGImportOptions {
  onCompleted?: (name: string, SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined) => void;
  onError?: (err: Error) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useDynamicSVGImport(
  name: string,
  category: 'skill-icons' | '' = 'skill-icons',
  options: UseDynamicSVGImportOptions = {},
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../../public/assets/${category}/${name}.svg`)).ReactComponent;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err: any) {
        onError?.(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
