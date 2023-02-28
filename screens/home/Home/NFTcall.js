import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

try {
    const address = '0x71CCe47C73Ab79FE5583226Dae95ABcd54d59E39'; //Random persons wallet https://opensea.io/TheKingVault

    const chain = EvmChain.ETHEREUM;

    await Moralis.start({
        apiKey: 'a0tSPfg7xlIaDorqxmXgZvGnddQ7WpiKte2Xt3KLWZ5H0sUMR6FINgbEUmca58rW',
        // ...and any other configuration
    });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
    });

    console.log(response?.result);
} catch (e) {
    console.error(e);
}