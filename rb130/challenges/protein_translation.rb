require 'pry'

class InvalidCodonError < StandardError; end

class Translation
  CODONS = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }

  def self.of_codon(key)
    CODONS.fetch(key.to_sym) {fail InvalidCodonError}
  end

  def self.of_rna(strand)
    strand.chars.each_slice(3).with_object([]) do |subarr, res|
      aa = of_codon(subarr.join)
      return res if aa == 'STOP' 
      res << aa
    end
  end
end
