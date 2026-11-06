import React from 'react';

export type AdBannerFormat = '728x90' | '468x60' | '160x600';

interface AdBannerProps {
  format: AdBannerFormat;
  className?: string;
}

const AD_CONFIGS: Record<AdBannerFormat, { key: string; width: number; height: number }> = {
  '728x90': {
    key: '6b5db1702739b25f17675d815e8c14f2',
    width: 728,
    height: 90,
  },
  '468x60': {
    key: 'cef4a59974423abe111a31126de213dc',
    width: 468,
    height: 60,
  },
  '160x600': {
    key: '99fdf720d4f79df5e2314974df6485cf',
    width: 160,
    height: 600,
  },
};

export const AdBanner: React.FC<AdBannerProps> = ({ format, className = '' }) => {
  const config = AD_CONFIGS[format];

  const htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bauval.org/22/${config.key}"></script>
  </body>
</html>`;

  return (
    <div className={`flex flex-col items-center justify-center my-6 overflow-hidden ${className}`}>
      <span className="text-[10px] uppercase tracking-wider text-[#A89890] mb-1 font-medium">
        Sponsored
      </span>
      <div 
        className="overflow-hidden rounded-md border border-[#E8DFD8] bg-[#FAF5F0] flex items-center justify-center max-w-full"
        style={{ width: `${config.width}px`, maxWidth: '100%' }}
      >
        <iframe
          srcDoc={htmlContent}
          width={config.width}
          height={config.height}
          title={`Adsterra Ad ${format}`}
          style={{
            border: 'none',
            overflow: 'hidden',
            width: `${config.width}px`,
            height: `${config.height}px`,
            maxWidth: '100%',
          }}
          scrolling="no"
        />
      </div>
    </div>
  );
};
