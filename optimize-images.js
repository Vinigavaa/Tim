const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const optimizedDir = path.join(__dirname, 'public', 'optimized');

// Criar diretório otimizado se não existir
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Configurações de otimização
const optimizationConfig = {
  jpg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    progressive: true,
    compressionLevel: 9
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

// Função para otimizar imagem
async function optimizeImage(inputPath, outputPath, format) {
  try {
    const image = sharp(inputPath);
    
    if (format === 'jpg' || format === 'jpeg') {
      await image
        .jpeg(optimizationConfig.jpg)
        .toFile(outputPath);
    } else if (format === 'png') {
      await image
        .png(optimizationConfig.png)
        .toFile(outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(optimizedSize/1024/1024).toFixed(2)}MB (${reduction}% redução)`);
    
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
  }
}

// Função principal
async function optimizeAllImages() {
  console.log('🚀 Iniciando otimização de imagens...\n');
  
  const imageFiles = fs.readdirSync(publicDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .filter(file => !file.includes('optimized'));
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const format = path.extname(file).toLowerCase().slice(1);
    const outputPath = path.join(optimizedDir, file);
    
    await optimizeImage(inputPath, outputPath, format);
  }
  
  console.log('\n🎉 Otimização concluída!');
  console.log(`📁 Imagens otimizadas salvas em: ${optimizedDir}`);
  console.log('\n💡 Próximos passos:');
  console.log('1. Substitua as imagens originais pelas otimizadas');
  console.log('2. Considere usar formatos WebP para melhor compressão');
  console.log('3. Implemente lazy loading para imagens não críticas');
}

// Executar se chamado diretamente
if (require.main === module) {
  optimizeAllImages().catch(console.error);
}

module.exports = { optimizeAllImages }; 