import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';
import { useToast } from './ui/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

interface FormData {
  nome: string;
  instagram: string;
  ramo_negocio: string;
  faturamento: string;
}

interface FormErrors {
  nome?: string;
  instagram?: string;
  ramo_negocio?: string;
  faturamento?: string;
}

const faturamentoOptions = [
  { value: 'ate_15k', label: 'Até R$ 15.000' },
  { value: '15k_30k', label: 'De R$ 15.000 a R$ 30.000' },
  { value: '30k_60k', label: 'De R$ 30.000 a R$ 60.000' },
  { value: '60k_100k', label: 'De R$ 60.000 a R$ 100.000' },
  { value: 'acima_100k', label: 'Acima de R$ 100.000' }
];

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    instagram: '',
    ramo_negocio: '',
    faturamento: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Validação do formulário
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
    }
    
    if (!formData.instagram.trim()) {
      newErrors.instagram = 'Instagram é obrigatório';
    } else if (!formData.instagram.includes('@') && !formData.instagram.startsWith('@')) {
      newErrors.instagram = 'Instagram deve começar com @ ou conter @';
    }
    
    if (!formData.ramo_negocio.trim()) {
      newErrors.ramo_negocio = 'Ramo do negócio é obrigatório';
    } else if (formData.ramo_negocio.trim().length < 3) {
      newErrors.ramo_negocio = 'Ramo do negócio deve ter pelo menos 3 caracteres';
    }
    
    if (!formData.faturamento) {
      newErrors.faturamento = 'Faturamento é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler para mudanças nos campos
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Handler para envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Erro na validação',
        description: 'Por favor, corrija os erros no formulário',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar dados para o template do EmailJS
      const templateParams = {
        to_email: 'viniciusgavauseall@gmail.com',
        from_name: formData.nome,
        to_name: 'Vinícius',
        subject: `Novo Lead: ${formData.nome} - ${formData.ramo_negocio}`,
        nome: formData.nome,
        instagram: formData.instagram,
        ramo_negocio: formData.ramo_negocio,
        faturamento: faturamentoOptions.find(opt => opt.value === formData.faturamento)?.label || formData.faturamento,
        data_envio: new Date().toLocaleString('pt-BR')
      };

      // Enviar email via EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setIsSubmitted(true);
      toast({
        title: 'Sucesso!',
        description: 'Seus dados foram enviados com sucesso. Entraremos em contato em breve!',
        duration: 5000
      });

      // Resetar formulário
      setFormData({
        nome: '',
        instagram: '',
        ramo_negocio: '',
        faturamento: ''
      });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Ocorreu um erro ao enviar seus dados. Tente novamente ou entre em contato conosco.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Se o formulário foi enviado com sucesso
  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto glass-card border-green-500/20 form-success-animation">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Dados enviados com sucesso!
          </h3>
          <p className="text-gray-300 mb-6">
            Obrigado por seu interesse! Analisaremos suas informações e entraremos em contato em breve.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500/10 hover:border-green-400"
          >
            Enviar novo formulário
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="lead-form-container">
      <Card className="w-full max-w-2xl mx-auto glass-card border-white/10 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Descubra o Potencial do Seu Negócio
          </CardTitle>
          <CardDescription className="text-lg text-gray-400">
            Preencha o formulário e receba uma análise personalizada gratuita
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-base font-medium text-white mb-2">
              Nome completo <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nome"
              type="text"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              placeholder="Digite seu nome completo"
              className={`h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500 ${errors.nome ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {errors.nome && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.nome}</span>
              </div>
            )}
          </div>

          {/* Campo Instagram */}
          <div className="space-y-2">
            <Label htmlFor="instagram" className="text-base font-medium text-white mb-2">
              Instagram <span className="text-red-500">*</span>
            </Label>
            <Input
              id="instagram"
              type="text"
              value={formData.instagram}
              onChange={(e) => handleInputChange('instagram', e.target.value)}
              placeholder="@seuinstagram ou link do perfil"
              className={`h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500 ${errors.instagram ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {errors.instagram && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.instagram}</span>
              </div>
            )}
          </div>

          {/* Campo Ramo do Negócio */}
          <div className="space-y-2">
            <Label htmlFor="ramo_negocio" className="text-base font-medium text-white mb-2">
              Ramo do negócio <span className="text-red-500">*</span>
            </Label>
            <Input
              id="ramo_negocio"
              type="text"
              value={formData.ramo_negocio}
              onChange={(e) => handleInputChange('ramo_negocio', e.target.value)}
              placeholder="Ex: Moda, Alimentação, Serviços, etc."
              className={`h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500 ${errors.ramo_negocio ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {errors.ramo_negocio && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.ramo_negocio}</span>
              </div>
            )}
          </div>

          {/* Campo Faturamento */}
          <div className="space-y-2">
            <Label htmlFor="faturamento" className="text-base font-medium text-white mb-2">
              Faturamento mensal <span className="text-red-500">*</span>
            </Label>
            <Select 
              value={formData.faturamento} 
              onValueChange={(value) => handleInputChange('faturamento', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className={`h-12 bg-white/5 border-white/20 text-white focus:border-red-500 focus:ring-red-500 ${errors.faturamento ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Selecione sua faixa de faturamento" className="text-gray-400" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/20">
                {faturamentoOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white hover:bg-white/10">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.faturamento && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.faturamento}</span>
              </div>
            )}
          </div>

          {/* Botão de Envio */}
          <Button 
            type="submit" 
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold text-base rounded-lg glow-red-intense transition-all duration-300 hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar dados
              </>
            )}
          </Button>
        </form>

        {/* Informações adicionais */}
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-sm text-gray-300 text-center">
            <strong className="text-white">100% seguro:</strong> Seus dados serão enviados diretamente para nossa equipe e não serão compartilhados com terceiros.
          </p>
        </div>
      </CardContent>
    </Card>
    </div>
  );
} 