import sodium from 'libsodium-wrappers';
import { bytesToNumber, fromHexString } from '../utils';
import { ContractKeypair } from './types';

export const decrypt = (
  keypair: ContractKeypair,
  ciphertext: string | Uint8Array,
): number => {
  const toDecrypt =
    typeof ciphertext === 'string' ? fromHexString(ciphertext) : ciphertext;
  const decrypted = sodium.crypto_box_seal_open(
    toDecrypt,
    keypair.publicKey,
    keypair.privateKey,
  );
  return bytesToNumber(decrypted);
};
