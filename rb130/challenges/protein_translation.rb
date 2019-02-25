require 'pry'

class InvalidCodonError < RuntimeError; end

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
    CODONS[key.to_sym]
  end

  def self.of_rna(strand)
    res = []
    strand.chars.each_slice(3) do |subarr|
      key = subarr.join.to_sym
      raise InvalidCodonError unless CODONS.keys.include?(key)
      break if CODONS[key] == 'STOP'
      res << CODONS[key]
    end
    res
  end
end
